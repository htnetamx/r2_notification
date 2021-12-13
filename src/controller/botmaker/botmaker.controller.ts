import axios from 'axios';

export interface botmakerPayload
{
    chatPlatform: "whatsapp",
    chatChannelNumber: '',
    platformContactId: '',
    ruleNameOrId: '',
    params: undefined
};

export class BotmakerController {
    async post(params: botmakerPayload) {
      try{
        const instance = axios.create({
          baseURL: 'https://go.botmaker.com/api/v1.0/intent/v2',
          timeout: 15000,
          headers: {
            "access-token": "eyJhbGciOiJIUzUxMiJ9.eyJidXNpbmVzc0lkIjoibmV0YSIsIm5hbWUiOiJKb3JnZSBHYXJkdcOxbyIsImFwaSI6dHJ1ZSwiaWQiOiJEendwcUthNzVqUnRSYmpHNXY2dE8zYkFoeGUyIiwiZXhwIjoxNzkzNTcyMTEwLCJqdGkiOiJEendwcUthNzVqUnRSYmpHNXY2dE8zYkFoeGUyIn0.WeeDunXgDyAddDtR4J0BVfb_PRpjetZZi5CjNpL6U2P0t8e0RJMbtJCMi7NcqghABoV8vTpnyooscVNbp9qzig"
          }
        })        
        await instance.post<botmakerPayload>('/', 
          params);  
      }
      catch(e) {
        console.log(e);
      }
    }
}