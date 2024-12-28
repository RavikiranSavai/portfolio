'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TechLogoProps {
  name: string
  size?: number
}

export function TechLogo({ name, size = 60 }: TechLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2"
    >
      <div className={`relative h-${size} w-${size} bg-white rounded-full p-2`}>
        <Image
          src={`/logos/${name.toLowerCase()}.svg`}
          alt={`${name} logo`}
          fill
          className="object-contain p-2"
        />
      </div>
      <span className="text-sm text-gray-300">{name}</span>
    </motion.div>
  )
}

