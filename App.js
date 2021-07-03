import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import faker from 'faker'

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});

const BG_IMG = 'https://www.proteste.org.br/-/media/proteste/images/home/eletronicos/celular/apps-inovadores.jpg?rev=66007ff6-e213-430e-ba14-19be4b541744';
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default () => {
  const scrollY = React.useRef((new Animated.Value(0))).current
    return <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Image 
          source={{uri: BG_IMG}}
          style={StyleSheet.absoluteFillObject}
          blurRadius={.5}
        />
        <Animated.FlatList 
          data = {DATA}
          onScroll={Animated.event(
            [{ nativeEvent: {contentOffset: {y: scrollY}}}],
            { useNativeDriver: true}
          )}
          keyExtractor = {item => item.key}
          contentContainerStyle={{
            padding: SPACING, 
            paddingTop: StatusBar.currentHeight || 42
          }}
          renderItem = {({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2)
            ]

             const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 1)
            ]

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [ 1, 1, 1, 0]
            })

             const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [ 1, 1, 1, 0]
            })

            return (<Animated.View style={{
                flexDirection:'row',
                padding: SPACING,
                marginBottom: SPACING, 
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 12,
                elevation:3,
                opacity, 
                transform: [{scale}]
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2
                }}
                />
                <View>
                  <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
                  <Text style={{fontSize: 18, opacity: .7}}>{item.jobTitle}</Text>
                  <Text style={{fontSize: 12, opacity: .8, color: '#0099cc'}}>{item.email}</Text>
                </View>
            </Animated.View>
            )}
        } 
        />
         </View>  
          }
