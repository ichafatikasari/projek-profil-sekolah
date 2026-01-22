'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react'
import { getNewsBySlug, getAllNews } from '@/app/data/newsData'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function NewsDetail() {
  const params = useParams()
  const router = useRouter()
  const [news, setNews] = useState(null)
  const [relatedNews, setRelatedNews] = useState([])

  useEffect(() => {
    if (params.slug) {
      const newsItem = getNewsBySlug(params.slug)
      if (newsItem) {
        setNews(newsItem)
        
        // Get related news (same category, excluding current)
        const allNews = getAllNews()
        const related = allNews
          .filter(item => item.category === newsItem.category && item.id !== newsItem.id)
          .slice(0, 3)
        setRelatedNews(related)
      }
    }
  }, [params.slug])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.excerpt,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Berita tidak ditemukan</h2>
          <button 
            onClick={() => router.push('/#berita')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push('/#berita')}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Berita</span>
          </button>
          
          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-block px-4 py-2 ${news.categoryColor} rounded-full text-sm font-semibold`}>
              {news.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {news.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Featured Image */}
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Share Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Share2 className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Bagikan</span>
          </button>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 mb-12">
          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8 pb-8 border-b-2 border-gray-100">
            {news.excerpt}
          </p>

          {/* Main Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-600 prose-ul:mb-6
              prose-ol:text-gray-600 prose-ol:mb-6
              prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 
              prose-blockquote:bg-cyan-50 prose-blockquote:py-4 prose-blockquote:px-6 
              prose-blockquote:rounded-r-xl prose-blockquote:my-8
              prose-blockquote:text-gray-700 prose-blockquote:italic
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-table:border-collapse prose-table:w-full prose-table:mb-8
              prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:font-bold
              prose-td:p-3 prose-td:border
            "
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Berita Terkait
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <div
                  key={item.id}
                  onClick={() => router.push(`/berita/${item.slug}`)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${item.categoryColor} rounded-full text-xs font-semibold backdrop-blur-sm`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to News Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => router.push('/#berita')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Lihat Berita Lainnya
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
