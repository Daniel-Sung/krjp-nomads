import { createClient } from '@/utils/supabase/server'
import type { Favorite, City } from '@/types/database.types'

// Extended favorite type with city details
export type FavoriteWithCity = Favorite & {
  cities: City | null
}

// Get user's favorites (server-side)
export async function getUserFavorites(userId: string): Promise<FavoriteWithCity[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('favorites')
    .select(`
      *,
      cities (*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching favorites:', error)
    return []
  }

  return data as FavoriteWithCity[]
}

// Check if a city is favorited by user (client-side)
export async function checkFavoriteClient(
  supabase: ReturnType<typeof import('@/utils/supabase/client').createClient>,
  cityId: string
): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return false
  }

  const { data, error } = await supabase
    .from('favorites')
    .select('id')
    .eq('user_id', user.id)
    .eq('city_id', cityId)
    .single()

  if (error) {
    return false
  }

  return !!data
}

// Add favorite (client-side)
export async function addFavoriteClient(
  supabase: ReturnType<typeof import('@/utils/supabase/client').createClient>,
  cityId: string
) {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('favorites')
    .insert({
      user_id: user.id,
      city_id: cityId,
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

// Remove favorite (client-side)
export async function removeFavoriteClient(
  supabase: ReturnType<typeof import('@/utils/supabase/client').createClient>,
  cityId: string
) {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated')
  }

  const { error } = await supabase
    .from('favorites')
    .delete()
    .eq('user_id', user.id)
    .eq('city_id', cityId)

  if (error) {
    throw error
  }

  return true
}

// Toggle favorite (client-side)
export async function toggleFavoriteClient(
  supabase: ReturnType<typeof import('@/utils/supabase/client').createClient>,
  cityId: string
): Promise<boolean> {
  const isFavorited = await checkFavoriteClient(supabase, cityId)

  if (isFavorited) {
    await removeFavoriteClient(supabase, cityId)
    return false
  } else {
    await addFavoriteClient(supabase, cityId)
    return true
  }
}
