import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    introIncident: {
        marginTop: 45,
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incident: {
        padding: 24,
        borderRadius: 18,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 38,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,    
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginBottom: 8,
    },

    incidentValue: {
        
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    contactBox:{
        padding: 24,
        borderRadius: 18,
        backgroundColor: '#FFF',
        marginBottom: 80,
        marginTop: 12,
        shadowColor: "#E02041",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 40,
        elevation: 6
    },

    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131A',
        lineHeight:30,
    },

    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:16,
    },

    actions: {
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    action:{
        backgroundColor:'#E02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center',
    },

    actionText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold'
    }
});    