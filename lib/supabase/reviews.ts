import { createClient } from '@/utils/supabase/server'
import type { Review, Profile } from '@/types/database.types'

// Extended review type with user profile
export type ReviewWithProfile = Review & {
  profiles: Profile | null
}

// Get reviews for a city
export async function getReviewsByCity(cityId: string): Promise<ReviewWithProfile[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      profiles (*)
    `)
    .eq('city_id', cityId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching reviews:', error)
    return []
  }

  return data as ReviewWithProfile[]
}

// Get user's reviews
export async function getUserReviews(userId: string): Promise<ReviewWithProfile[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      profiles (*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching user reviews:', error)
    return []
  }

  return data as ReviewWithProfile[]
}

// Create a new review (client-side)
export async function createReviewClient(
  supabase: ReturnType<typeof import('@/utils/supabase/client').createClient>,
  review: {
    city_id: string
    rating: number
    title?: string
    content?: string
    pros?: string[]
    cons?: string[]
    stay_duration?: string
    is_recommended?: boolean
  }
) {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('reviews')
    .insert({
      ...review,
      user_id: user.id,
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

// Update a review (client-side)
export async function updateReviewClient(
  supabase: ReturnType<typeof import('@/utils/supabase/client').createClient>,
  reviewId: string,
  updates: {
    rating?: number
    title?: string
    content?: string
    pros?: string[]
    cons?: string[]
    stay_duration?: string
    is_recommended?: boolean
  }
) {
  const { data, error } = await supabase
    .from('reviews')
    .update(updates)
    .eq('id', reviewId)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

// Delete a review (client-side)
export async function deleteReviewClient(
  supabase: ReturnType<typeof import('@/utils/supabase/client').createClient>,
  reviewId: string
) {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId)

  if (error) {
    throw error
  }

  return true
}
