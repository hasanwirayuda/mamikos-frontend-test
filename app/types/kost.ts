export type KostGender = 'putra' | 'putri' | 'campur'

export interface Facility {
  id: string
  name: string
  icon?: string
  category?: 'room' | 'bathroom' | 'common' | 'parking'
}

export interface Rule {
  id: string
  name: string
  allowed: boolean
}

export interface Kost {
  id: string
  slug: string
  title: string
  gender: KostGender
  city: string
  location: string
  rating: number
  reviewCount: number
  originalPrice: number
  discountPercent?: number
  finalPrice: number
  isPromoNgebut?: boolean
  isRecommended?: boolean
  isOnPromo?: boolean
  isManaged?: boolean
  remainingRooms?: number
  imageUrl: string
  facilities: string[]
}

export interface KostDetail extends Kost {
  galleryImages: string[]
  roomSize: string
  electricityIncluded: boolean
  specifications: string[]
  allFacilities: Facility[]
  rules: Rule[]
  ownerName: string
  ownerJoinedDate: string
  description: string
}

export interface Promo {
  id: string
  title: string
  subtitle?: string
  imageUrl: string
  badge?: string
  link?: string
}

export interface City {
  id: string
  name: string
  imageUrl: string
  kostCount?: number
}

export interface Campus {
  id: string
  name: string
  city: string
  imageUrl?: string
  iconName?: string
  kostCount?: number
}
