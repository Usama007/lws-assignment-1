import React from 'react'

import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import TableSection from './TableSection'

export default function App() {
    return (
        <div className="bg-[#172227] font-[Inter] text-white">
            <Header />
            <HeroSection />
            <TableSection />
            <Footer />
        </div>
    )
}
