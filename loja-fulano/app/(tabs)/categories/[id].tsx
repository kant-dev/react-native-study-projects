import { FlatList, Text, View } from "react-native";
import { getAllProducts, getProductsByCategory } from "../../../services/products";
import { IdStyle } from "./idStyle";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoriesId } from "../../../services/category";
import ProductCard from "../../../components/Card/ProductCard";


const IdProductor = () => {

      const { id } = useLocalSearchParams();

      const idCategory = parseInt(id as string);

      const category = getCategoriesId(idCategory)

      if(!category) return router.back();

      const products = getProductsByCategory(idCategory);

      return (  
      <View style={IdStyle.container}>
            <Stack.Screen options={{title: category.title}}/>
            <FlatList
                  data={products}
                  renderItem={({ item }) => <ProductCard data={item}/>}
                  keyExtractor={( item ) => item.id.toString()}
            />
      </View>
      )
}

export default IdProductor;