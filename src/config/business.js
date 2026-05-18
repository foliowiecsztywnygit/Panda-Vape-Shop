export const BUSINESS = {
  name: 'PANDA Vape Shop',
  addressLine1: 'Wąwozowa 36/65',
  addressLine2: '02-796 Warszawa',
  phone: '',
  timezone: 'Europe/Warsaw',
  hours: {
    2: { open: '10:00', close: '20:00' },
    3: { open: '10:00', close: '20:00' },
    4: { open: '10:00', close: '20:00' },
    5: { open: '10:00', close: '20:00' },
    6: { open: '10:00', close: '20:00' },
  },
  social: {
    facebook: '',
    instagram: '',
  },
  googleRating: {
    rating: 3.3,
    reviewsCount: 24,
  },
  featuredReviews: [
    {
      author: 'Aleksandra Piwowarska',
      text: 'Update: gdy zrezygnowałam po 45 minutach czekania pod sklepem nadal nikogo nie było.',
      stars: 1,
    },
    {
      author: 'Franek Bambynek',
      text: 'Scam, to co kupilem nie dziala po 2 tygodniach (marka wlasa) tylko lekko taniej niz w innych miejscach, nie polecam',
      stars: 1,
    },
    {
      author: 'Victoria',
      text: 'Jestem bardzo zadowolony z mojego zakupu tutaj, sprzedawca Dawid jest profesjonalny i entuzjastyczny i rozwiązał wszystkie moje problemy z urządzeniami, wrócę wkrótce!',
      stars: 5,
    },
  ],
}

export const SHOP_CATEGORIES = [
  'E-papierosy',
  'Liquidy',
  'Pod-y',
  'Grzałki',
  'Kartridże',
  'Jednorazówki',
  'Akcesoria',
  'Bongo',
  'Shisha',
  'CBD',
  'Chinese Market',
]

function parseTimeToMinutes(value) {
  const [h, m] = value.split(':').map((x) => Number(x))
  return h * 60 + m
}

function getWarsawParts(date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: BUSINESS.timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date)

  const weekday = parts.find((p) => p.type === 'weekday')?.value
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)

  return { weekday, hour, minute }
}

function weekdayShortToIndex(weekday) {
  const map = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0 }
  return map[weekday] ?? null
}

export function getOpenStatus(date = new Date()) {
  const { weekday, hour, minute } = getWarsawParts(date)
  const dayIndex = weekdayShortToIndex(weekday)
  const dayHours = dayIndex != null ? BUSINESS.hours[dayIndex] : null

  if (!dayHours) {
    return { isOpen: false, label: 'Zamknięte', closesAt: null, opensAt: null }
  }

  const nowMinutes = hour * 60 + minute
  const openMinutes = parseTimeToMinutes(dayHours.open)
  const closeMinutes = parseTimeToMinutes(dayHours.close)

  const isOpen = nowMinutes >= openMinutes && nowMinutes < closeMinutes

  if (isOpen) {
    return {
      isOpen: true,
      label: `Otwarte · do ${dayHours.close}`,
      closesAt: dayHours.close,
      opensAt: dayHours.open,
    }
  }

  const opensAt = nowMinutes < openMinutes ? dayHours.open : null
  return {
    isOpen: false,
    label: opensAt ? `Zamknięte · otwarcie ${opensAt}` : 'Zamknięte',
    closesAt: dayHours.close,
    opensAt: dayHours.open,
  }
}

