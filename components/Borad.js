/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {  
  StyleSheet,  
  View,
  Text,  
  Image,
  Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Square} from './Square'

const  Board = () => {

  const COLUMN_NAMES = ['','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',''];
  const ROW_NAMES = [1, 2, 3, 4, 5, 6, 7, 8];

 
 

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
 


  return (
    <>
      
   
        <View  style={styles.container}>          
          <Text style={styles.header}>Header</Text>
          <View style={styles.chessRootContainer}>

            <View style={styles.chessTop}> 

            {
              COLUMN_NAMES.map((data)=>{
                return(                
                <Text style={styles.chessBottomItem}>{data}</Text>              
                )
              })
            }

            </View>

            <View style={styles.chessContainer}> 
            
              <View style={styles.chessLeft}>
                {
                  ROW_NAMES.map((data)=>{
                  return(                
                  <Text style={styles.chessBottomItem}>{data}</Text>              
                  )
                  })
                }
              </View> 
                        
             
                <View style={styles.chessCenter}>
                    <Square></Square>
                </View>
               

              

              <View style={styles.chessRight}>
              {
                ROW_NAMES.map((data)=>{
                  return(                
                  <Text style={styles.chessBottomItem}>{data}</Text>              
                  )
                })
            }
              </View>          

            </View>

           

            <View style={styles.chessBottom}> 
            {
              COLUMN_NAMES.map((data)=>{
                return(                
                <Text style={styles.chessBottomItem}>{data}</Text>              
                )
              })
            }
             
            </View>

          </View>
          <View>
            
          </View>
        </View>     
    </>
  );
};

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

  squareWhite:{
    backgroundColor:"#FFFFFF",
    height: 45,
    width:45,
      
  },
  squareBlack:{
    backgroundColor:"#000000",
    color:"#000000",
    height: 45,
    width:45,
    
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
    height: 70,
    width:45,    
  },
  
  
});

export default Board;
