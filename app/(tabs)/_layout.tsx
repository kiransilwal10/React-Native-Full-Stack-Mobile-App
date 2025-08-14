import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = () =>{
    return (
        <ImageBackground
            source={images.highlight}
            className="flex-row w-full min-w-[112px] min-h-14 justify-center items-center rounded-full overflow-hidden px-4"
        >
            <Image
                source={icons.home}
                style={{ tintColor: "#151312", width: 20, height: 20 }}
            />
            <Text className="text-secondary text-base font-semibold ml-2">
                Home
            </Text>
        </ImageBackground>
    )

}


const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                     headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                       <TabIcon
                           focused = {focused}
                           icon = {icons.home}
                           title={"Home"}

                       />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{ title: "Search", headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            focused = {focused}
                            icon = {icons.home}
                            title={"Search"}

                        />
                    ),
            }}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: "Profile", headerShown: false }}
            />
        </Tabs>
    );
};

export default _Layout;
