'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoGalleryProps {
  logos: string[]
}

export function LogoGallery({ logos }: LogoGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {logos.map((logo, index) => (
        <motion.div
          key={logo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center bg-gray-800 rounded-lg p-6"
        >
          <div className="relative h-24 w-24">
            <Image
              src={`/logos/${logo.toLowerCase()}.svg`}
              alt={`${logo} logo`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

