import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
@WebSocketGateway({cors: true})
export class MeGateway{
  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody()body: any){
    console.log(body)
  }

}
