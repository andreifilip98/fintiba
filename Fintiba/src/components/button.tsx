import { TouchableOpacity, Text } from "react-native";

interface props {
    onPress: () => void;
    label: string;
}

const Button = ({ onPress, label }: props) => {
    return (
        <TouchableOpacity style={{ backgroundColor: "#00A1FF", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10 }}
            onPress={() => onPress()}>
            <Text style={{ fontSize: 20, color: "#ffffff" }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;