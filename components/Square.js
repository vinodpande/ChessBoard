import React from 'react'
import {View ,Image,StyleSheet} from 'react-native'
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
export const Square =() =>{

    const CHESS_BORAD=[
        [1,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8]
      ];

      const CHESS_PIECE_WHITE_R1=[
        require("../chess/chess_piece_2_white_rook.png"),
        require("../chess/chess_piece_2_white_knight.png"),
        require("../chess/chess_piece_2_white_bishop.png"),
        require("../chess/chess_piece_2_white_king.png"),   
        require("../chess/chess_piece_2_white_queen.png"),
        require("../chess/chess_piece_2_white_bishop.png"),  
        require("../chess/chess_piece_2_white_knight.png"), 
        require("../chess/chess_piece_2_white_rook.png"), 
      ]
    
      const CHESS_PIECE_WHITE_R2=[
        require("../chess/chess_piece_2_white_pawn.png"),
        require("../chess/chess_piece_2_white_pawn.png"),
        require("../chess/chess_piece_2_white_pawn.png"),
        require("../chess/chess_piece_2_white_pawn.png"),
    
        require("../chess/chess_piece_2_white_pawn.png"),   
        require("../chess/chess_piece_2_white_pawn.png"),  
        require("../chess/chess_piece_2_white_pawn.png"), 
        require("../chess/chess_piece_2_white_pawn.png"), 
      ]
     
      const CHESS_PIECE_BLACK_R1=[
        require("../chess/chess_piece_2_black_rook.png"),
        require("../chess/chess_piece_2_black_knight.png"),
        require("../chess/chess_piece_2_black_bishop.png"),
        require("../chess/chess_piece_2_black_king.png"),   
        require("../chess/chess_piece_2_black_queen.png"),  
        require("../chess/chess_piece_2_black_bishop.png"),
        require("../chess/chess_piece_2_black_knight.png"), 
        require("../chess/chess_piece_2_black_rook.png"), 
      ]
    
      const CHESS_PIECE_BLACK_R2=[
        require("../chess/chess_piece_2_black_pawn.png"),
        require("../chess/chess_piece_2_black_pawn.png"),
        require("../chess/chess_piece_2_black_pawn.png"),
        require("../chess/chess_piece_2_black_pawn.png"),
        require("../chess/chess_piece_2_black_pawn.png"),   
        require("../chess/chess_piece_2_black_pawn.png"),  
        require("../chess/chess_piece_2_black_pawn.png"), 
        require("../chess/chess_piece_2_black_pawn.png"), 
      ]

    return(
        < >
             {
                   CHESS_BORAD.map((data,r)=>{                    
                     return(
                       <View style={{
                         flex:1, 
                         flexDirection:"row",
                         alignItems: 'stretch',}}>
                         {
                           data.map((data,i)=>{  
                            if(r===0){
                              return(                               
                                <Image
                                  style={styles.tinyLogo}
                                  source={CHESS_PIECE_BLACK_R1[i]}
                                  />
                               )
                             }
                             if(r===1){
                              return(                               
                                <Image
                                  style={styles.tinyLogo}
                                  source={CHESS_PIECE_BLACK_R2[i]}
                                  />
                               )
                             }          
                             if(r===7){
                              return(                               
                                <Image
                                  style={styles.tinyLogo}
                                  source={CHESS_PIECE_WHITE_R1[i]}
                                  />
                               )
                             }
                             if(r===6){
                              return(                               
                                <Image
                                  style={styles.tinyLogo}
                                  source={CHESS_PIECE_WHITE_R2[i]}
                                  />
                               )
                             }                                
                             
                           })
                         }
                       </View>
                     )
                   
                   })
                 }
        </>
    )
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
  
    container:{
      backgroundColor:'#000000',
      flex:1,
      
    },
  
    header:{
        backgroundColor:'#CDCDCD',     
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical:"center",
        textAlign:"center",
        flex:0.5     
    },
  
    chessRootContainer:{
      backgroundColor:'black',
      flex:8   
    },
  
    chessTop:{
      backgroundColor:"#FFFFFF",
      flex:0.5,
      flexDirection:"row"
    },
  
    chessContainer:{
      backgroundColor:"#FFFFFF",
      flex:8,
      flexDirection:'row',
      alignSelf:"center"
    },
  
    chessCenter:{
      backgroundColor:"#FFFFFF",
      flex:8,
      flexDirection:"column",    
    },
  
    chessCenterItem:{
  
    },
  
    chessLeft:{ 
      flex:0.5,
      alignSelf:"center",
      flexDirection:"column-reverse"
    },
  
    chessRight:{   
      flex:0.5,   
      flexDirection:"column-reverse",
      textAlignVertical:"center",
      textAlign:"center"
    },
  
  
    chessBottom:{
      backgroundColor:"#FFFFFF",
      flex:0.5,
      flexDirection:"row",
     
        
    },
  
    chessBottomItem:{
      flex:1,
      backgroundColor:"#000000",
      color:"#FFFFFF",
      textAlignVertical:"center",
      textAlign:"center",
    },
  
    chessBoxItemWhite:{
      flex:1,
      backgroundColor:"#FFFFFF",
      color:"#000000",
      alignContent:"center",
      margin:1, 
      textAlign:"center",
      textAlignVertical:"center"
    },
  
    chessBoxItemBlack:{
      flex:1,
      backgroundColor:"#000000",
      color:"#FFFFFF",
      alignContent:"center",
      margin:1, 
      textAlign:"center",
      textAlignVertical:"center"
    },
  
    bottomButton:{
      flex:0.5,
     backgroundColor:"red"
    },
  
    tinyLogo: {
      flex:1,
      height: 50,
      
    },
    
    
  });
