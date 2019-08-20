import React, { Component } from 'react';
import {ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {consumido:0, status:'Ruim', pct:0};

		this.addCopo = this.addCopo.bind(this);
		this.atualizar = this.atualizar.bind(this);
		this.zerar = this.zerar.bind(this);
	}

	atualizar() {
		let s = this.state;
		s.pct = Math.floor((s.consumido/2000) * 100);

		if(s.pct >= 100) {
			s.status = "Bom";
		} else {
			s.status = "Ruim";
		}

		this.setState(s);
	}

	addCopo() {
		let s = this.state;
		s.consumido += 200;
		this.setState(s);

		this.atualizar();
	}

	zerar() {
		let s = this.state;
		s.pct = 0;
		s.consumido = 0;
		this.setState(s);
	}

	render() {
	    return (
        <View style={styles.body}>
          <ImageBackground source={require('./images/waterbg.png')}
            style={styles.bgimage}>
              <View>
			  	<View style={styles.infoTitle}><Text style={styles.infoTitle}>Beba Água!</Text></View>
                <View style={styles.infoArea}>

                  <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Meta</Text>
                    <Text style={styles.areaDado}>2000ml</Text>
                  </View>
                  
                  <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Consumido</Text>
                    <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
                  </View>

                  <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Status</Text>
                    <Text style={styles.areaDado}>{this.state.status}</Text>
                  </View>

                </View>

                <View style={styles.pctArea}>
                  <Text style={styles.pctText}>{this.state.pct}%</Text>
                </View>

                <View style={styles.btnArea}>
                  <TouchableOpacity style={styles.btnButton} onPress={this.addCopo}>
					  <Text style={styles.btnText}>Beber 200ml</Text>
				  </TouchableOpacity>
                </View>
				<View style={styles.btnAreaZ}>
                  <TouchableOpacity style={styles.btnButton} onPress={this.zerar}>
					  <Text style={styles.btnText}>Zerar</Text>
				  </TouchableOpacity>
                </View>
              </View>
          </ImageBackground>
        </View>
	    );
	}
}

const styles = StyleSheet.create({
	body:{
		flex:1,
		paddingTop: 20,
		backgroundColor: '#FFFFFF',
    },
    bgimage:{
		flex:1,
		width: null,
	},
	infoTitle:{
		color: '#2b4274',
		fontWeight: 'bold',
		fontSize: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoArea:{
		flex:1,
    	flexDirection:'row',
		marginTop:30,
	},
	area:{
		flex:1,
		alignItems: 'center',
	},
	areaTitulo:{
		color:'#45b2fc'
	},
	areaDado:{
		color:'#2b4274',
		fontSize:15,
		fontWeight:'bold',
	},
	pctArea:{
		marginTop:170,
		alignItems:'center',
	},
	pctText:{
		fontSize:70,
		color:'#FFFFFF',
		backgroundColor: 'transparent'
	},
	btnArea:{		
		fontSize: 50,
		marginTop:50,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnButton: {
		marginBottom: 30,
		padding: 20,
		width: 150,	 	 
		backgroundColor: '#FFFFFF',
		borderRadius: 4,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText:{
		color:'#45b2fc',
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnAreaZ:{		
		fontSize: 50,
		marginTop:30,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
})








