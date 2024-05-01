import axios from "axios";
import PlayerModel from "../model/player-model";

export const getDistinctByPositionKey = ['getDistinctByPosition'];

export const getDistinctByPosition = async() =>{
    const {data}=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {params:{q:'player',oq:'position'}}
    );
    return data;
}
