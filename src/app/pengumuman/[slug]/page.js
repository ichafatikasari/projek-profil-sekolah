'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Megaphone, Clock, ArrowLeft, Share2, Bell, Pin, User } from 'lucide-react'
import { getAnnouncementBySlug, getAllAnnouncements } from '@/app/data/announcementsData'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function AnnouncementDetail() {
  const params = useParams()
  const router = useRouter()
  const [announcement, setAnnouncement] = useState(null)
  const [relatedAnnouncements, setRelatedAnnouncements] = useState([])

  useEffect(() => {
    if (params.slug) {
      const item = getAnnouncementBySlug(params.slug)
      if (item) {
        setAnnouncement(item)

        const related = getAllAnnouncements()
          .filter(a => a.priority === item.priority && a.id !== item.id)
          .slice(0, 3)

        setRelatedAnnouncements(related)
      }
    }
  }, [params.slug])

  const priorityGradient = {
    high: 'from-red-500 to-red-600',
    medium: 'from-yellow-500 to-orange-600',
    low: 'from-blue-500 to-cyan-600'
  }

  const priorityBadge = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-blue-100 text-blue-700'
  }

  if (!announcement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Pengumuman tidak ditemukan</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* ===== HEADER (FINAL – TIDAK KEPOTONG) ===== */}
      <div
        className={`bg-gradient-to-br ${
          priorityGradient[announcement.priority]
        } pt-32 pb-24 relative`}
      >
        <div className="max-w-4xl mx-auto px-4 text-white relative z-10">
          <button
            onClick={() => router.push('/#pengumuman')}
            className="flex items-center gap-2 mb-6 text-white/90 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Pengumuman
          </button>

          <div className="flex gap-3 mb-4">
            {announcement.pinned && (
              <span className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                <Pin className="w-4 h-4" />
                Disematkan
              </span>
            )}
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${priorityBadge[announcement.priority]}`}>
              {announcement.priority.toUpperCase()}
            </span>
          </div>

          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Megaphone className="w-8 h-8" />
          </div>

          <h1 className="text-4xl font-bold mb-6">{announcement.title}</h1>

          <div className="flex gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {announcement.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {announcement.author}
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-4xl mx-auto px-4 -mt-12">
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-4 py-2 bg-white rounded-xl shadow">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        <article className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <p className="text-xl text-gray-700 mb-8 font-medium">
            {announcement.description}
          </p>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />
        </article>
      </div>

      <Footer />
    </div>
  )
}
