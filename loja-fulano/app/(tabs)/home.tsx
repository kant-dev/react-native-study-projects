import { FlatList, Text, View } from "react-native";
import { homeStyle } from "./homeStyle";
import { getAllProducts } from "../../services/products";
import ProductCard from "../../components/Card/ProductCard";

const Home = () => {
      const products = getAllProducts();

      return (  
      <View style={homeStyle.container}>
            <FlatList
                  data={products}
                  renderItem={({ item }) => <ProductCard data={item}/>}
                  keyExtractor={(item) => item.id.toString()}
                  style={homeStyle.list}
            />
      </View>
      )
}

export default Home;