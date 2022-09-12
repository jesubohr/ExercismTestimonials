export type TestimonialType = {
  id: number
  track: {
    slug: string
    title: string
    icon_url: string
  }
  exercise: {
    slug: string
    title: string
    icon_url: string
  }
  mentor: {
    handle: string
    avatar_url: string
  }
  content: string
  created_at: string
}

export type ParamOptions = { 
  [x: string]: any;
  page?: number;
  track?: string;
  exercise?: string;
  order?: string;
}

export type TestimonialFetch = {
  testimonials: {
    results: TestimonialType[]
    pagination: {
      current_page: number
      total_pages: number
    }
    track_counts: {
      [key: string]: number
    }
  }
}
