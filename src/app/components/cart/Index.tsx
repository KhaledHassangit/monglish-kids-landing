"use client"
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'
import EmptyCard from './EmptyCard'
import { useLanguage } from '@/app/lang/LanguageProvider'
import CartTitle from '@/app/components/cart/CartTitle'
import Container from '@/app/utils/Container'

export interface CartItemData {
  id: number
  name: {
    en: string
    ar: string
  }
  price: number
  quantity: number
}


const CartContent = () => {
    const { language } = useLanguage()
    const isEnglish = language === "ENG"
    const direction = isEnglish ? "ltr" : "rtl"
    const [cartItems, setCartItems] = useState<CartItemData[]>([]);
     useEffect(() => {
        setCartItems([
        {
            id: 1,
            name: {
            en: "Adult Course",
            ar: "دورة البالغين"
            },
            price: 240,
            quantity: 1,
        },
        {
            id: 2,
            name: {
            en: "Children Course",
            ar: "دورة الأطفال"
            },
            price: 200,
            quantity: 1,
        }
        ])
  }, [])
    const ItemsLength = cartItems.length;

    return (
        <>
            <Container className="py-10">
                <CartTitle ItemsLength={ItemsLength} />
            </Container>
            <div className="w-full bg-white pb-10 ">
                <Container className="pt-10">
                    <div className="-mt-15">
                        {ItemsLength === 0 ? (
                            <EmptyCard />
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10" dir={direction}>
                                <div className="order-1 lg:col-span-2">
                                    <CartItem cartItems={cartItems} setCartItems={setCartItems} />
                                </div>
                                <div className="order-2 lg:col-span-1">
                                    <Checkout />
                                </div>
                            </div>
                        )}
                    </div>
          
                </Container>
            </div>
            

        </>
    )
}

export default CartContent
