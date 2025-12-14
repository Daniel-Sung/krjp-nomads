export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cities: {
        Row: {
          best_season: string[] | null
          budget: string | null
          country_id: string | null
          created_at: string | null
          description: string | null
          environment: string[] | null
          id: string
          image_url: string | null
          internet_speed: number | null
          monthly_cost_amount: number
          monthly_cost_currency: string
          name_en: string
          name_ja: string
          name_ko: string
          region_id: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          best_season?: string[] | null
          budget?: string | null
          country_id?: string | null
          created_at?: string | null
          description?: string | null
          environment?: string[] | null
          id: string
          image_url?: string | null
          internet_speed?: number | null
          monthly_cost_amount: number
          monthly_cost_currency: string
          name_en: string
          name_ja: string
          name_ko: string
          region_id?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          best_season?: string[] | null
          budget?: string | null
          country_id?: string | null
          created_at?: string | null
          description?: string | null
          environment?: string[] | null
          id?: string
          image_url?: string | null
          internet_speed?: number | null
          monthly_cost_amount?: number
          monthly_cost_currency?: string
          name_en?: string
          name_ja?: string
          name_ko?: string
          region_id?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cities_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          },
        ]
      }
      city_scores: {
        Row: {
          city_id: string | null
          cost: number | null
          coworking: number | null
          english: number | null
          food: number | null
          healthcare: number | null
          id: string
          internet: number | null
          nightlife: number | null
          overall: number | null
          safety: number | null
          transport: number | null
          updated_at: string | null
          weather: number | null
        }
        Insert: {
          city_id?: string | null
          cost?: number | null
          coworking?: number | null
          english?: number | null
          food?: number | null
          healthcare?: number | null
          id?: string
          internet?: number | null
          nightlife?: number | null
          overall?: number | null
          safety?: number | null
          transport?: number | null
          updated_at?: string | null
          weather?: number | null
        }
        Update: {
          city_id?: string | null
          cost?: number | null
          coworking?: number | null
          english?: number | null
          food?: number | null
          healthcare?: number | null
          id?: string
          internet?: number | null
          nightlife?: number | null
          overall?: number | null
          safety?: number | null
          transport?: number | null
          updated_at?: string | null
          weather?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "city_scores_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: true
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "city_scores_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: true
            referencedRelation: "city_stats"
            referencedColumns: ["city_id"]
          },
        ]
      }
      city_votes: {
        Row: {
          city_id: string | null
          created_at: string | null
          id: string
          user_id: string | null
          vote_type: string | null
        }
        Insert: {
          city_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
          vote_type?: string | null
        }
        Update: {
          city_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
          vote_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "city_votes_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "city_votes_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "city_stats"
            referencedColumns: ["city_id"]
          },
          {
            foreignKeyName: "city_votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          created_at: string | null
          flag: string
          id: string
          name_en: string
          name_ja: string
          name_ko: string
        }
        Insert: {
          created_at?: string | null
          flag: string
          id: string
          name_en: string
          name_ja: string
          name_ko: string
        }
        Update: {
          created_at?: string | null
          flag?: string
          id?: string
          name_en?: string
          name_ja?: string
          name_ko?: string
        }
        Relationships: []
      }
      favorites: {
        Row: {
          city_id: string | null
          created_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          city_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          city_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "city_stats"
            referencedColumns: ["city_id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      regions: {
        Row: {
          country_id: string | null
          created_at: string | null
          id: string
          name_en: string
          name_ja: string | null
          name_ko: string
        }
        Insert: {
          country_id?: string | null
          created_at?: string | null
          id: string
          name_en: string
          name_ja?: string | null
          name_ko: string
        }
        Update: {
          country_id?: string | null
          created_at?: string | null
          id?: string
          name_en?: string
          name_ja?: string | null
          name_ko?: string
        }
        Relationships: [
          {
            foreignKeyName: "regions_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          city_id: string | null
          cons: string[] | null
          content: string | null
          created_at: string | null
          id: string
          is_recommended: boolean | null
          likes_count: number | null
          pros: string[] | null
          rating: number | null
          stay_duration: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
          visited_at: string | null
        }
        Insert: {
          city_id?: string | null
          cons?: string[] | null
          content?: string | null
          created_at?: string | null
          id?: string
          is_recommended?: boolean | null
          likes_count?: number | null
          pros?: string[] | null
          rating?: number | null
          stay_duration?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          visited_at?: string | null
        }
        Update: {
          city_id?: string | null
          cons?: string[] | null
          content?: string | null
          created_at?: string | null
          id?: string
          is_recommended?: boolean | null
          likes_count?: number | null
          pros?: string[] | null
          rating?: number | null
          stay_duration?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          visited_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "city_stats"
            referencedColumns: ["city_id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      city_stats: {
        Row: {
          avg_rating: number | null
          city_id: string | null
          dislikes_count: number | null
          favorites_count: number | null
          likes_count: number | null
          recommend_rate: number | null
          review_count: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof Database
}
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof Database
}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof Database
}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

// Custom types for easier use
export type City = Tables<"cities">
export type CityScore = Tables<"city_scores">
export type Country = Tables<"countries">
export type Region = Tables<"regions">
export type Profile = Tables<"profiles">
export type Review = Tables<"reviews">
export type Favorite = Tables<"favorites">
export type CityVote = Tables<"city_votes">
export type CityStats = Tables<"city_stats">

// Combined city type with scores and stats
export type CityWithDetails = City & {
  city_scores: CityScore | null
  city_stats: CityStats | null
  countries: Country | null
  regions: Region | null
}
