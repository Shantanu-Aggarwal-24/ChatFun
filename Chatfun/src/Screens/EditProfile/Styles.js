import  {StyleSheet} from 'react-native'
import { moderateScale, textScale } from '../../Styles/responsiveSize'
import fontFamily from '../../Styles/fontFamily'

const styles = StyleSheet.create({
    contaier:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c3e50'
    },
    descStyle:{
        fontSize:textScale(12),
        fontFamily:fontFamily.blackFont,
        flex:1,
        marginLeft:moderateScale(16),
        color:colors.grey
    }
});

export default styles;