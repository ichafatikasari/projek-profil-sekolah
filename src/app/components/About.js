'use client'

import { History } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-cyan-700 font-semibold">Tentang Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sejarah SMA Negeri 1 Cemerlang
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perjalanan panjang dalam mencerdaskan bangsa
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <History className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sejarah Singkat</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SMA Negeri 1 Cemerlang didirikan pada tahun 1985 dengan visi menjadi sekolah unggulan yang menghasilkan lulusan berkualitas. Berawal dari sebuah gedung sederhana dengan 3 kelas, kini telah berkembang menjadi sekolah dengan fasilitas modern dan lengkap.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selama lebih dari 35 tahun, kami telah meluluskan ribuan siswa yang kini tersebar di berbagai universitas terkemuka di dalam dan luar negeri. Banyak alumni kami yang telah menjadi profesional sukses di berbagai bidang.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Prestasi demi prestasi terus diraih, baik di bidang akademik maupun non-akademik. Komitmen kami adalah terus meningkatkan kualitas pendidikan dengan mengikuti perkembangan zaman dan teknologi.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                <div className="text-3xl font-bold text-cyan-600 mb-1">1985</div>
                <div className="text-sm text-gray-600">Tahun Berdiri</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                <div className="text-3xl font-bold text-cyan-600 mb-1">35+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                <div className="text-3xl font-bold text-cyan-600 mb-1">5000+</div>
                <div className="text-sm text-gray-600">Alumni</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2ODg0MzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
