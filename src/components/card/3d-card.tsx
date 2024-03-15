'use client'

import Image from 'next/image'
import React from 'react'

import {CardContainer, CardItem} from '../ui/acertinity-card'

export function ThreeDCardDemo() {
  return (
    <CardContainer className="shadow-xl inter-var shadow-black/40 rounded-b-xl lg:w-[30rem] mx-auto">
      <CardItem
        className="w-full  border dark:border-black/[0.2] border-black/[0.1] rounded-xl dark:bg-primary "
        translateZ="100"
      >
        <div className="flex flex-row gap-2 py-2 pl-4">
          <div className="w-3 h-3 transition-all ease-linear bg-red-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
          <div className="w-3 h-3 transition-all ease-linear bg-yellow-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
          <div className="w-3 h-3 transition-all ease-linear bg-green-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
        </div>
        <Image
          src={'/My Coding - Made with Clipchamp.gif'}
          height="1000"
          width="1000"
          className="object-cover w-full rounded-b-xl lg:h-96 h-60 group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
    </CardContainer>
  )
}
