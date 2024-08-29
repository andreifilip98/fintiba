import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { store } from "../../state/store";
import { setMovieList } from "../../state/movieSlices";

interface Movie {
    id: string;
    title: string;
    releaseYear: string;
};

const HomeScreen = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [movies, setMovies] = React.useState<Movie[]>([])

    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(
                'https://reactnative.dev/movies.json',
            );
            const json = await response.json();
            dispatch(setMovieList(json.movies));
            console.log(JSON.stringify(store.getState()))
            setMovies(json.movies);
            return json.movies;
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={movies}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <Text>
                            {item.title}, {item.releaseYear}
                        </Text>
                    )}
                />
            )}
        </View>
    )
};

export default HomeScreen;