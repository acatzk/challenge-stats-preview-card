import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { stats, IStat } from '~/data'

const Index: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Stats Preview Card Component</title>
      </Head>
      <div className="antialiased bg-[#0A0C1B]">
        <div className="flex items-center justify-center h-full min-h-screen w-full">
          <div className="flex flex-col md:flex-row-reverse rounded-md overflow-hidden mx-6 xs:mx-8 bg-[#1C1938] max-w-4xl h-auto md:h-80">
            <div className="relative w-auto md:w-1/2 h-80 md:h-auto">
              <Image
                src="/images/image-header-desktop.jpg"
                layout="fill"
                alt="Header Mobile Image"
              />
              <span className="absolute bg-[#A952E2] inset-0 bg-opacity-60 contrast-125 brightness-50 saturate-75"></span>
            </div>
            <div className="w-auto md:w-1/2 flex flex-col my-5 mx-0 md:mx-6 space-y-0 md:space-y-6 max-w-md md:max-w-none">
              <div className="space-y-4 p-6 max-w-3xl">
                <h1 className="text-white font-semibold text-center md:text-left text-2xl md:text-3xl leading-tight">
                  Get <span className="text-[#A952E2]">insight</span> that help
                  your business grow.
                </h1>
                <p className="text-xs text-center md:text-left text-[#9391AB] leading-relaxed px-8 md:px-0 pr-0 md:pr-6">
                  Discover the benefits of data analytics and make better
                  decisions regarding revenue, customer experience, and overall
                  efficiency.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center my-0 md:my-5 mx-0 md:mx-6 space-x-0 md:space-x-10 space-y-4 md:space-y-0 text-white">
                {stats.map(({ count, label }, i) => (
                  <Stats key={i} count={count} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const Stats: React.FC<IStat> = ({ count, label }) => {
  return (
    <div className="flex flex-col items-center space-y-0 md:space-y-1 w-full">
      <h2 className="font-bold">{count}</h2>
      <p className="text-xs font-medium text-[#7A788E] uppercase">{label}</p>
    </div>
  )
}

export default Index
