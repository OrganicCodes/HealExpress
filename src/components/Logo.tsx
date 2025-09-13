import { Shield, Heart, Cross } from 'lucide-react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  }

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Text */}
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold text-gray-900 leading-tight`}>
            HealExpress
          </h1>
          <p className="text-xs text-gray-600 -mt-0.5 leading-tight">
            Emergency Medical Services
          </p>
        </div>
      )}
    </div>
  )
}
