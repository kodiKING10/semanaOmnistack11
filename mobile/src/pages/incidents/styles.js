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
        alignItems: 'center'
    },
    
    headerText:{
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    aboutUs: {

    },

    title: {
        fontSize : 30,   
        marginBottom: 16,
        marginTop: 35,
        color: '#131A',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32,       
        borderColor: '#E02041',
        marginBottom: 30
    },

    incident: {
        padding: 24,
        borderRadius: 18,       
        backgroundColor: '#FFF',
        marginBottom: 16,
        shadowColor: "#E02041",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 40,
        elevation: 6
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

    action:{
        backgroundColor:'#E02041',
        borderRadius:8,
        height:40,
        width:'35%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 35,
    },

    actionText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold'
    }
});