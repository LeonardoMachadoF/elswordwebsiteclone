import PVPRank from './rankings/pvp.json';
import PVERank from './rankings/pve.json';
import PVPRankINT from './rankings/int.json';
import PVERankINT from './rankings/int-pve.json';
import { CharacterRankType } from "../types/CharacterRankType";

export const getRankings = {
    getPvpNaRankings: async (page: string, limit: string, type: string, char: string, name?: string) => {
        let data: CharacterRankType[] = [];
        let rawData: CharacterRankType[] = [];
        let filteredArray: CharacterRankType[] = [];

        switch (type) {
            case 'pvpna':
                rawData = PVPRank;
                break;
            case 'pvena':
                rawData = PVERank;
                break;
            case 'pvpint':
                rawData = PVPRankINT;
                break;
            case 'pveint':
                rawData = PVERankINT;
                break;
        }

        if (char !== 'all') {
            filteredArray = rawData.filter((i: CharacterRankType) => i.classe.toLowerCase().split(' ').join('-') === char ? i : '');
            rawData = filteredArray;
        }

        let start = (parseInt(page as string) - 1) * parseInt(limit as string);
        let end = start + parseInt(limit as string);

        while (start < end) {
            rawData[start] ? data.push(rawData[start]) : '';
            start++
        }
        if (data[0]?.name) {
            return data;
        }
        return null;
    },

    // getFilteredByName: (name: string, rankings: CharacterRankType[] | null) => {
    //     console.log(rankings)
    //     let filteredArray: CharacterRankType[] = [];
    //     rankings?.map((i) => {
    //         i.name.toLowerCase().indexOf(name.toLowerCase()) > -1 ? filteredArray.push(i) : '';
    //     })
    //     console.log(filteredArray)
    //     return filteredArray;


    // }
    getFilteredByName: (page: string, limit: string, type: string, char: string, name?: string) => {
        let data: CharacterRankType[] = [];
        let rawData: CharacterRankType[] = [];
        let filteredArray: CharacterRankType[] = [];

        switch (type) {
            case 'pvpna':
                rawData = PVPRank;
                break;
            case 'pvena':
                rawData = PVERank;
                break;
            case 'pvpint':
                rawData = PVPRankINT;
                break;
            case 'pveint':
                rawData = PVERankINT;
                break;
        }

        if (char !== 'all') {
            filteredArray = rawData.filter((i: CharacterRankType) => i.classe.toLowerCase().split(' ').join('-') === char ? i : '');
            rawData = filteredArray;
        }

        if (name) {
            filteredArray = rawData.filter((i: CharacterRankType) => i.name.toLowerCase().indexOf(name.toLowerCase()) > -1 ? i : '');
            rawData = filteredArray;
        }

        let start = (parseInt(page as string) - 1) * parseInt(limit as string);
        let end = start + parseInt(limit as string);

        while (start < end) {
            rawData[start] ? data.push(rawData[start]) : '';
            start++
        }
        if (data[0]?.name) {
            return data;
        }
        return [];
    }
}