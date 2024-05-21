import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { MoveUpRight } from 'lucide-react'
import { currencyFormatter } from '@/lib/utils/currency-formatter'
import { numberRounderFormatter } from '@/lib/utils/number-rounder-formatter'

type GlobalMarket = {
    data: {
        active_cryptocurrencies: number
        upcoming_icos: number
        ongoing_icos: number
        ended_icos: number
        markets: number
        total_market_cap: {
            btc: number
            eth: number
            ltc: number
            bch: number
            bnb: number
            eos: number
            xrp: number
            xlm: number
            link: number
            dot: number
            yfi: number
            usd: number
            aed: number
            ars: number
            aud: number
            bdt: number
            bhd: number
            bmd: number
            brl: number
            cad: number
            chf: number
            clp: number
            cny: number
            czk: number
            dkk: number
            eur: number
            gbp: number
            gel: number
            hkd: number
            huf: number
            idr: number
            ils: number
            inr: number
            jpy: number
            krw: number
            kwd: number
            lkr: number
            mmk: number
            mxn: number
            myr: number
            ngn: number
            nok: number
            nzd: number
            php: number
            pkr: number
            pln: number
            rub: number
            sar: number
            sek: number
            sgd: number
            thb: number
            try: number
            twd: number
            uah: number
            vef: number
            vnd: number
            zar: number
            xdr: number
            xag: number
            xau: number
            bits: number
            sats: number
        }
        total_volume: {
            btc: number
            eth: number
            ltc: number
            bch: number
            bnb: number
            eos: number
            xrp: number
            xlm: number
            link: number
            dot: number
            yfi: number
            usd: number
            aed: number
            ars: number
            aud: number
            bdt: number
            bhd: number
            bmd: number
            brl: number
            cad: number
            chf: number
            clp: number
            cny: number
            czk: number
            dkk: number
            eur: number
            gbp: number
            gel: number
            hkd: number
            huf: number
            idr: number
            ils: number
            inr: number
            jpy: number
            krw: number
            kwd: number
            lkr: number
            mmk: number
            mxn: number
            myr: number
            ngn: number
            nok: number
            nzd: number
            php: number
            pkr: number
            pln: number
            rub: number
            sar: number
            sek: number
            sgd: number
            thb: number
            try: number
            twd: number
            uah: number
            vef: number
            vnd: number
            zar: number
            xdr: number
            xag: number
            xau: number
            bits: number
            sats: number
        }
        market_cap_percentage: {
            btc: number
            eth: number
            usdt: number
            bnb: number
            sol: number
            usdc: number
            xrp: number
            steth: number
            doge: number
            ada: number
        }
        market_cap_change_percentage_24h_usd: number
        updated_at: number
    }
}

const MarketCapCard = ({ marketCap }: { marketCap?: GlobalMarket }) => {
    const marketCapPrice = currencyFormatter(Number(marketCap?.data.total_market_cap?.usd))
    const marketPercentage = numberRounderFormatter(Number(marketCap?.data?.market_cap_change_percentage_24h_usd))

    return (
        <Card className="h-full w-full rounded-xl hover:bg-primary-foreground duration-300 cursor-pointer">
            <div className='p-6 flex justify-between'>
                <h1 className='my-auto text-2xl font-semibold leading-none tracking-tight'>Market Cap</h1>
                <MoveUpRight className='p-2 w-10 h-10 rounded-xl' />
            </div>
            <CardContent className="flex flex-col lg:flex-row items-center justify-center">
                <div className='w-full'>
                    <span className='block text-xl lg:text-2xl '>{marketCapPrice}</span>
                    <span className={`${Number(marketPercentage) > 0 ? 'text-green-500' : 'text-destructive'}`}>{`${marketPercentage}%`}</span>
                </div>
                <div className='w-full mt-5 lg:mt-0 '>
                    <span className='block text-2xl text-center'>{marketCap?.data.active_cryptocurrencies}</span>
                    <p className=" text-center">
                        Active Currencies
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default MarketCapCard