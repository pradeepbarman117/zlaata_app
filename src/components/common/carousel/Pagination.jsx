import { StyleSheet, View } from "react-native";

const Pagination = ({ data, activeIndex }) => {
    return (
        <View style={css.paginationContainer}>
            {data.map((_, index) => (
                <View
                    key={index}
                    style={[
                        css.dot,
                        { backgroundColor: activeIndex === index ? '#0042E0' : '#ccc' },
                        { width: activeIndex === index ? 25 : 10,height:8 },
                    ]}
                />
            ))}
        </View>
    );
};

const css = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});


export default Pagination