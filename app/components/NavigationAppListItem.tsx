/**
 * NavigationAppListItem.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import React from "react";
import { Image, Text, StyleSheet, ImageSourcePropType, View, Switch } from "react-native";

const styles = StyleSheet.create({
    item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center", 
    justifyContent: "flex-start",
      paddingLeft: 8,
      paddingRight: 8,
      height: 80,
    },
    icon: { 
        height: 64, 
        width: 64
    },
    textView:
    {
        padding: 16,
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
      },
    subtitle: {
    fontSize: 18,
    color: '#AAA'
    },
  })

/**
 * Interface with properties for the NavigationAppListItem.
 */
export interface INavigationAppListItemProps {
    icon: ImageSourcePropType;
    name: string;
    package: string;
    value: boolean;
    onValueChanged: (key: string, value: boolean) => void;
}

/**
 * Renders the NavigationAppListItem.
 */
export default class NavigationAppListItem extends React.PureComponent<INavigationAppListItemProps, object> {
    
    onSwitchValueChanged = (value: boolean) => {
        this.props.onValueChanged(this.props.package, value);
    }

    render() {
        return (<View style={styles.item}>
            <Image style={styles.icon} source={this.props.icon} />
            <View style={styles.textView}>
                <Text style={styles.title}>{this.props.name}</Text>
                <Text style={styles.subtitle}>{this.props.package}</Text>
            </View>
            <Switch value={this.props.value} onValueChange={this.onSwitchValueChanged} />
        </View>);
    }
}