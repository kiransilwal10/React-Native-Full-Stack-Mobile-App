import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

type Movie = {
    id: number | string;
    poster_path?: string | null;
    title: string;
    vote_average?: number;
    release_date?: string;
};

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    const normalizedPath =
        poster_path ? (poster_path.startsWith("/") ? poster_path : `/${poster_path}`) : null;

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri: normalizedPath
                            ? `https://image.tmdb.org/t/p/w500${normalizedPath}`
                            : "https://placehold.co/600x400/1a1a1a/ffffff.png",
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                    accessibilityLabel={`${title} poster`}
                />

                <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
                    {title}
                </Text>
                <View className={"flex-row items-center justify-start gap-x-1"}>
                    <Image source={icons.star} className="size-4" />

                    <Text className={"text-ts text-white font-bold uppercase"}>{Math.round(vote_average / 2 )}</Text>

                </View>

                <View className={"flex-row items-center justify-between"}>
                    <Text className={"text-ts text-light-300 font-medium mt-1"}>
                        {release_date?.split('-')[0]}

                    </Text>

            </View>



            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;
