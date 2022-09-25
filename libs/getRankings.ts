import { NextApiHandler } from "next";

import PVPRank from './rankings/pvp.json';
import PVERank from './rankings/pve.json';
import PVPRankINT from './rankings/int.json';
import PVERankINT from './rankings/int-pve.json';
import { CharacterRankType } from "../types/CharacterRankType";

export const getRankings = {
    getPvpNaRankings: async (page: string, limit: string, type: string) => {
        let data: CharacterRankType[] = [];
        let rawData: CharacterRankType[] = [];

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
    }
}