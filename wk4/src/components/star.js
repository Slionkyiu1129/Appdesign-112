import React from "react";
import { View,Image,StyleSheet } from "react-native";

const Star =({star})=>{
    let stars=[];
    for(let i=0;i<5;i++){
        if(star>i){
            stars.push(
                <Image
                    source={{uri:'https://cdn-icons-png.freepik.com/256/1828/1828884.png'}}
                    style={styles.star}
                    key={i}
                    />
            )
        }
        else{
            stars.push(
                <Image
                    source={{uri:'https://cdn-icons-png.freepik.com/256/13077/13077454.png?uid=R129986147&ga=GA1.1.563072477.1709013132&'}}
                    style={styles.star}
                    key={i}
                    />
            )
        }
    }
    return(
        <View>
            <View style={styles.stars}>{stars}</View>
        </View>
    )
}

const styles=StyleSheet.create({
    stars:{
        flexDirection:'row',
        marginTop: 15
    },
    star:{
        width:15,
        height:15,
        marginRight:4,
    }
});
export default Star;