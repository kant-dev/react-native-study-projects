import { FlatList, Text, View } from "react-native";
import ProductCard from "../../../components/Card/ProductCard";
import { getAllProducts } from "../../../services/products";
import { ListStyle } from "./styles/listStyle";
import { getAllCategories } from "../../../services/category";
import Banner from "../../../components/Banner/Banner";

const List = () => {
      const categories = getAllCategories();

      return (  
      <View style={ListStyle.container}>
            <FlatList
                  data={categories}
                  renderItem={({ item }) => <Banner data={item}/>}
                  keyExtractor={(item) => item.id.toString()}
                  style={ListStyle.item}
            />
      </View>
      )
}

export default List;