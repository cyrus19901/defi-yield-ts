import { RateObserver } from '../src/rateObserver'
import { ProtocolRates } from '../src/types'

export class AssetDictData {
    constructor(
        public readonly asset: string,
        public readonly mintAddress: string,
        public readonly borrowRate: number | undefined,
        public readonly depositRate: number | undefined){}
}

export class AssetDict {
    constructor(){}

    public async getApricotRates(){
        const rateObserver = new RateObserver();
        const protocolRatesApricot: ProtocolRates = await rateObserver.fetch('apricot');
        return protocolRatesApricot;
        }
    
        public async getFranciumRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesFrancium: ProtocolRates = await rateObserver.fetch('francium');
        return protocolRatesFrancium;
    }
    
    public async getJetRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesJet: ProtocolRates = await rateObserver.fetch('jet');
        return protocolRatesJet;
    }
    
    public async getLarixRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesLarix: ProtocolRates = await rateObserver.fetch('larix');
        return protocolRatesLarix;
    }
    
    public async getMangoRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesMango: ProtocolRates = await rateObserver.fetch('mango');
        return protocolRatesMango;
    }
    
    public async getPortRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesPort: ProtocolRates = await rateObserver.fetch('port');
        return protocolRatesPort;
    }
    
    public async getSolendRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesSolend: ProtocolRates = await rateObserver.fetch('solend');
        return protocolRatesSolend;
    }
    
    public async getTulipRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesTulip: ProtocolRates = await rateObserver.fetch('tulip');
        return protocolRatesTulip;
    }

    public async getZoRates(): Promise<ProtocolRates> {
        const rateObserver = new RateObserver();
        const protocolRatesZo: ProtocolRates = await rateObserver.fetch('01');
        return protocolRatesZo;
    }

    public assetExists(name): boolean {
        const assetsPair = ['USDT','SOL' ,'USDC', 'BTC', 'UST' ,'wETH']
        return assetsPair.some(function(value) {
            return value === name;
        }); 
    }
}
