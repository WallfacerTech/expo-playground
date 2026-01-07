import { View, Text, ImageSourcePropType, ImageBackground, ScrollView, Pressable } from 'react-native';
import Header from '@/components/Header';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function MasonryScreen() {
    return (
        <>
            <Header showBackButton />
            <ScrollView className="flex-1 bg-background">
                <View className='flex flex-row items-center gap-1 px-6 mb-4'>
                    <Chip label='All' onPress={() => {}} />
                    <Chip label='Nike' onPress={() => {}} />
                    <Chip label='Adidas' onPress={() => {}} />
                    <Chip label='Vans' onPress={() => {}} />
                </View>
                <View className='flex flex-row flex-wrap flex-1 px-4'>
                    <ProductItem title='Nike Air Max' image={require('@/assets/img/shoe-1.jpg')} price={24.99} rating={4.5} />
                    <ProductItem title='Adidas Superstar' image={require('@/assets/img/shoe-2.jpg')} price={29.99} rating={4.9} />
                    <ProductItem title='Vans Old Skool' image={require('@/assets/img/shoe-3.jpg')} price={34.99} rating={4.8} />
                    <ProductItem title='Nike Air Force 1' image={require('@/assets/img/shoe-1.jpg')} price={49.99} rating={4.9} />
                    <ProductItem title='Adidas Stan Smith' image={require('@/assets/img/shoe-2.jpg')} price={39.99} rating={4.9} />
                    <ProductItem title='Vans Old Skool' image={require('@/assets/img/shoe-3.jpg')} price={34.99} rating={4.8} />
                </View>
            </ScrollView>
        </>
    );
}



const Chip = ({ label, onPress }: { label: string; onPress: () => void }) => {
    return (
        <Pressable className='bg-primary rounded-full px-4 py-2' onPress={onPress}>
            <Text className='text-white text-sm font-semibold'>{label}</Text>
        </Pressable>
    );
}
const ProductItem = ({ title, image, price, rating }: { title: string; image: string; price: number; rating: number }) => {
    return (
        <View className='w-1/2 h-[240px] p-1.5 rounded-2xl overflow-hidden'>
            <ImageBackground source={image as ImageSourcePropType} className='w-full overflow-hidden h-full rounded-2xl'>
                <LinearGradient
                    colors={['transparent', 'rgba(0, 0, 0, 0.2)']}
                    style={{ width: '100%', height: '100%' }}
                >

                    <View className='p-4 flex-1 justify-between'>

                        <View className='flex-row items-center ml-auto'>
                            <Feather name='star' size={12} color='white' />
                            <Text className='text-sm font-semibold text-white ml-1'>{rating}</Text>
                        </View>
                        <View>
                            <Text className='font-bold text-white'>{title}</Text>
                            <Text className='text-sm text-white'>${price}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}





