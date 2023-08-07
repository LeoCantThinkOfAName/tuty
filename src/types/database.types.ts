export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          authorId: string
          content: string
          createdAt: string
          id: number
          postId: string
        }
        Insert: {
          authorId: string
          content: string
          createdAt?: string
          id?: number
          postId: string
        }
        Update: {
          authorId?: string
          content?: string
          createdAt?: string
          id?: number
          postId?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_authorId_fkey"
            columns: ["authorId"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_postId_fkey"
            columns: ["postId"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      currencies: {
        Row: {
          id: number
          name: Database["public"]["Enums"]["currency_type"]
        }
        Insert: {
          id?: number
          name: Database["public"]["Enums"]["currency_type"]
        }
        Update: {
          id?: number
          name?: Database["public"]["Enums"]["currency_type"]
        }
        Relationships: []
      }
      posts: {
        Row: {
          authorId: string
          categoryId: number
          content: string
          createdAt: string
          currencyId: number
          deletedAt: string | null
          id: string
          location: string
          objective: string | null
          rate: number | null
          rateType: Database["public"]["Enums"]["rate_type"] | null
          subject: string
          tags: string[] | null
          textSearch: unknown | null
          updatedAt: string | null
        }
        Insert: {
          authorId: string
          categoryId: number
          content: string
          createdAt?: string
          currencyId?: number
          deletedAt?: string | null
          id: string
          location: string
          objective?: string | null
          rate?: number | null
          rateType?: Database["public"]["Enums"]["rate_type"] | null
          subject: string
          tags?: string[] | null
          textSearch?: unknown | null
          updatedAt?: string | null
        }
        Update: {
          authorId?: string
          categoryId?: number
          content?: string
          createdAt?: string
          currencyId?: number
          deletedAt?: string | null
          id?: string
          location?: string
          objective?: string | null
          rate?: number | null
          rateType?: Database["public"]["Enums"]["rate_type"] | null
          subject?: string
          tags?: string[] | null
          textSearch?: unknown | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_authorId_fkey"
            columns: ["authorId"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_categoryId_fkey"
            columns: ["categoryId"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_currencyId_fkey"
            columns: ["currencyId"]
            referencedRelation: "currencies"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          img: string | null
          name: string
          suspended: boolean
          suspendedAt: string | null
          title: string | null
          updatedAt: string | null
          userId: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id: string
          img?: string | null
          name: string
          suspended?: boolean
          suspendedAt?: string | null
          title?: string | null
          updatedAt?: string | null
          userId: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          img?: string | null
          name?: string
          suspended?: boolean
          suspendedAt?: string | null
          title?: string | null
          updatedAt?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      currency_type: "USD" | "TWD"
      rate_type: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

