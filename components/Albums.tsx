/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AlbumType } from './types';
import { usePagination } from '../hooks/usePagination';

const Albums = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const { endPageIndex, startPageIndex, setPage, currentPageIndex } =
    usePagination(albums.length);

  const renderItem = ({ item }: { item: AlbumType }) => (
    <View style={styles.itemWrapperStyle}>
      <Image
        style={styles.itemImageStyle}
        source={{ uri: item.thumbnailUrl }}
      />
      <View style={styles.contentWrapperStyle}>
        <Text style={styles.txtNameStyle}>{item.title.substring(0, 20)}</Text>
      </View>
    </View>
  );

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator
          size='large'
          color='#aaa'
        />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setPage(currentPageIndex + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then((data: AlbumType[]) => {
        console.log(data);
        setAlbums(albums => [
          ...albums,
          ...data.slice(startPageIndex, endPageIndex),
        ]);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [currentPageIndex, startPageIndex, endPageIndex]);

  return (
    <FlatList
      data={albums}
      renderItem={renderItem}
      keyExtractor={item => item.id as string}
      ListFooterComponent={renderLoader}
      onEndReachedThreshold={1}
      onEndReached={loadMoreItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export default Albums;
