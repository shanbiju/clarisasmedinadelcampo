export type AppRole = "admin" | "user"

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          email: string | null
          full_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          email?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          email?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_roles: {
        Row: {
          id: string
          user_id: string
          role: AppRole
        }
        Insert: {
          id?: string
          user_id: string
          role?: AppRole
        }
        Update: {
          id?: string
          user_id?: string
          role?: AppRole
        }
      }
      bakery_products: {
        Row: {
          id: string
          name_es: string
          name_en: string
          description_es: string | null
          description_en: string | null
          price: number | null
          image_url: string | null
          available: boolean
          display_order: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name_es: string
          name_en: string
          description_es?: string | null
          description_en?: string | null
          price?: number | null
          image_url?: string | null
          available?: boolean
          display_order?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name_es?: string
          name_en?: string
          description_es?: string | null
          description_en?: string | null
          price?: number | null
          image_url?: string | null
          available?: boolean
          display_order?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      gallery_images: {
        Row: {
          id: string
          image_url: string
          title_es: string | null
          title_en: string | null
          description_es: string | null
          description_en: string | null
          category: string | null
          display_order: number | null
          created_at: string
        }
        Insert: {
          id?: string
          image_url: string
          title_es?: string | null
          title_en?: string | null
          description_es?: string | null
          description_en?: string | null
          category?: string | null
          display_order?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          image_url?: string
          title_es?: string | null
          title_en?: string | null
          description_es?: string | null
          description_en?: string | null
          category?: string | null
          display_order?: number | null
          created_at?: string
        }
      }
      translations: {
        Row: {
          id: string
          key: string
          value_es: string
          value_en: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value_es: string
          value_en: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value_es?: string
          value_en?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Functions: {
      has_role: {
        Args: { _role: AppRole; _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: AppRole
    }
  }
}

// Helper types
export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"]
export type InsertTables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Insert"]
export type UpdateTables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Update"]
