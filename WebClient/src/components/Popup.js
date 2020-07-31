import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { ReactComponent as Exit } from '../svg/close.svg'
import { fadeOutUp, fadeOutDown, fadeInDown, fadeInUp } from 'react-animations'

// Maintain the current popup state (to track animations)
var PopupState = {
    Open: 0,
    Close: 1,
    None: 2
}; 

// Determines the content we load in the popup. 
export var PopupType = {
    About: 0,
    Permissions: 1,
}; 

// Custom Fade in animation. 
const customFadeIn = Radium.keyframes({
    from: {
        opacity: '0'
    },
    to: {
        opacity: '0.5'
    }
}, 'fadesIn'); 

const customFadeOut = Radium.keyframes({
    from: {
        opacity: '0.5'
    },
    to: {
        opacity: '0'
    }
}, 'fadesOut'); 

const fadeInDuration = '0.5s'; 
const slideInDuration = '2.0s'; 
const fadeOutDuration = '1.5s';

const styles={
    overlay: {
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        background: color.deepGrey,
        zIndex: '-999'
    },

    fadeIn: {
        animationName: customFadeIn,
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction:'ease-in'
    },
    
    fadeOut: {
        animationName: customFadeOut,
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    fadeOutUp: {
        animationName: Radium.keyframes(fadeOutUp, 'fadeOutUp'),
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    fadeOutDown: {
        animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown'),
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    fadeInDown: {
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
        animationDuration: slideInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    fadeInUp: {
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        animationDuration: slideInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    showOverlay: {
        zIndex: '998'
    },

    showContent: {
        zIndex: '999'
    },

    contentContainer: {
        position: 'fixed',
        zIndex: '-999',
        left: '0px',
        top:'0px',
        bottom: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

    content: {
        borderRadius: fontSize.tiny,
        borderStyle: 'solid',
        borderColor: color.lightGrey,
        borderWidth: '1px',
        overflow: 'auto',
        maxWidth: 'calc(100% - 50px)', // Bind this to media query
        maxHeight: 'calc(100% - 100px)', // Bind this to media query
        
        '@media (min-width: 600px)': {      
            maxWidth: 'calc(100% - 100px)', // Bind this to media query
            maxHeight: 'calc(100% - 100px)', // Bind this to media query
        },

        '@media (min-width: 750px)': {  
            maxWidth: 'calc(100% - 150px)', // Bind this to media query
            maxHeight: 'calc(100% - 100px)', // Bind this to media query
        },

        '@media (min-width: 1200px)' : {
            maxWidth: 'calc(100% - 300px)', // Bind this to media query
            maxHeight: 'calc(100% - 100px)', // Bind this to media query
        }
    },

    stretchContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: color.deepGrey,
        color: color.sunLight,
        paddingLeft: padding.small, // Bind this to media query
        paddingRight: padding.small, // Bind this to media query,
        '@media (min-width: 600px)': {      
            paddingLeft: padding.big, 
            paddingRight: padding.big
        },

        '@media (min-width: 900px)': {  
            paddingLeft: padding.extraBig, 
            paddingRight: padding.extraBig
        },

        '@media (min-width: 1200px)' : {
            paddingLeft: padding.huge, 
            paddingRight: padding.huge
        } 
    },

    title: {
        marginTop: padding.big,
        textAlign: 'center',
        fontFamily: fontFamily.birada,
        fontSize: fontSize.huge,
        letterSpacing: '3px',
        lineHeight: '1.4',

        '@media (min-width: 600px)': {  
            fontSize: fontSize.extraMassive
        },
       
        '@media (min-width: 750px)': {  
            fontSize: fontSize.enormous
        },

        '@media (min-width: 750px) and (orientation: portrait)': {  
            fontSize: fontSize.extraEnormous
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.extraEnormous
        },

        '@media (min-width: 1200px)' : {
            // no change.
            fontSize: fontSize.extraInsane
        },

        '@media (min-width: 1400px)' : {
        },
    },

    body: {
        marginTop: padding.small,
        justifyContent: 'center',
        fontFamily: fontFamily.din,
        fontSize: fontSize.small
    },

    mediaQueryOnText: {
        '@media (min-width: 750px) and (orientation: portrait)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 1200px)' : {
            // no change.
            fontSize: fontSize.big
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.veryBig
        }
    },

    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        padding: padding.extraSmall,
        backgroundColor: color.darkGrey,
        right: fontSize.extraSmall,
        marginRight: '-' + fontSize.verySmall,
        height: fontSize.verySmall,
        width: fontSize.verySmall,
        fill: color.lightGrey,

        '@media (min-width: 600px)': {  
            marginRight: '-' + fontSize.big
        },


        '@media (min-width: 750px) and (orientation:portrait)': {  
            
        },

        '@media (min-width: 900px)': {  
            // height: fontSize.veryBig, 
            // width: fontSize.veryBig,
            height: fontSize.big, 
            width: fontSize.big,
            marginRight: '-' + fontSize.veryHuge
        },

        '@media (min-width: 1200px)': {  
            marginRight: '-' + fontSize.extraMassive
        },

        '@media (min-width: 1400px)' : {
            // height: fontSize.extraBig, 
            // width: fontSize.extraBig,
        }
    },

    icon: { 
        width: '100%',
        height: '100%'
    },

    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: padding.big, 
        marginBottom: padding.extraBig,
        background: color.darkGrey, 
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        color: color.lightGrey,
        letterSpacing: '1px',
        padding: padding.small,
        borderRadius: fontSize.tiny
    },

    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: padding.small,
    },

    footer: {
        display: 'flex',
        alignItems: 'center',
        color: color.link,
        alignSelf: 'center',
        fontFamily: fontFamily.bebas, 
        fontSize: fontSize.verySmall,
        letterSpacing: '1.5px',

        '@media (min-width: 750px)': {  
            fontSize: fontSize.small,
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.big
        }
    },

    footerSecond: {
        marginTop: padding.tiny,
    },

    developed: {
        paddingLeft: padding.tiny, 
        paddingRight: padding.tiny,
        color: color.lightGrey
    },

    developer: {
        marginLeft: padding.tiny
    },

    permissions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '150px'
    } 
}

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isVisible : false,
            popupState: PopupState.None,
            popupType: PopupType.Permissions
        };

        this.content = React.createRef(); 
    }

    componentDidMount() {
        setTimeout(this.showPopup(PopupType.Permissions), 500);
    }

    render() {
        // Handle overlay styles. 
        let overlayStyle; 
        if (this.state.isVisible) {
            overlayStyle = [styles.overlay, styles.showOverlay]; 
            if (this.state.popupState === PopupState.Open) {
                overlayStyle = [overlayStyle, styles.fadeIn]; 
            } else if (this.state.popupState === PopupState.Close) {
                overlayStyle = [overlayStyle, styles.fadeOut]; 
            } else {
                // Do nothing. 
            }
        } else {
            overlayStyle = styles.overlay; 
        }

        // Handle different types of Popups. 
        let content, contentContainerStyle; 
        content = this.state.popupType === PopupType.Permissions ? this.getPermissionsContent() : this.getAboutContent();
        if (this.state.isVisible) {
            contentContainerStyle = [styles.contentContainer, styles.showContent]; 
            if (this.state.popupState === PopupState.Open) {
                contentContainerStyle = [contentContainerStyle, styles.fadeInDown]; 
            } else if (this.state.popupState === PopupState.Close) {
                contentContainerStyle = [contentContainerStyle, styles.fadeOutUp];
            } else {
                // Do nothing when it's in None state. 
            }
        } else {
            contentContainerStyle = styles.contentContainer; 
        }

        return (
            <div onClick={this.handleOnTouch.bind(this)} onTouchStart={this.handleOnTouch.bind(this)} style={styles.container}>
                <div style={overlayStyle}></div>
                <div onAnimationEnd={this.contentAnimationEnd.bind(this)} style={contentContainerStyle}>
                    {content}
                </div>
            </div>
        );
    }

    contentAnimationEnd() {
        if (this.state.isVisible) {
            // Hide everything when content animation ends. 
            if (this.state.popupState === PopupState.Close) {
                this.setState({
                    isVisible: false,
                    popupState: PopupState.None
                }); 
            }
        }
    }

    getAuthorizeButton() {
        let buttonContainerStyle=[styles.buttonContainer, styles.mediaQueryOnText];
        return (
            <div style={buttonContainerStyle} onClick={this.hidePopup.bind(this)}>
                Authorize
            </div>
        ); 
    }

    getSkipButton() {
        let buttonContainerStyle=[styles.buttonContainer, styles.mediaQueryOnText];
        return (
            <div style={buttonContainerStyle} onClick={this.hidePopup.bind(this)}>
                Skip
            </div>
        ); 
    }

    getCloseButton() {
        let buttonContainerStyle=[styles.buttonContainer, styles.mediaQueryOnText];
        return (
            <div style={buttonContainerStyle} onClick={this.hidePopup.bind(this)}>
                CLOSE
            </div>
        ); 
    }

    getIconButton() {
        return(
            <div onClick={this.hidePopup.bind(this)} style={styles.iconContainer}>
                <Exit style={styles.icon} />
            </div>
        ); 
    }

    getPermissionsContent() {
        let footer = this.getFooter(); 
        let authorizeButton = this.getAuthorizeButton();
        let skipButton = this.getSkipButton(); 
        let closeButton = this.getCloseButton(); 
        let iconButton = this.getIconButton();  
        let bodyStyle = [styles.body, styles.mediaQueryOnText];
        return (
            <div ref={this.content} style={styles.content}>
                <div style={styles.stretchContainer}>
                    { iconButton }
                    <div style={styles.title}>
                        Biography of a Portrait
                    </div>
                    <div style={bodyStyle}>
                        {'Here are the Camera Permissions. Authorize to grant access. Skip to deny access'}
                    </div>
                    <div style={styles.permissions}>
                        {authorizeButton}
                        {skipButton}
                    </div>
                    { closeButton }
                    { footer }
                </div>
            </div>
        )
    }

    getAboutContent() {
        let footer = this.getFooter(); 
        let closeButton = this.getCloseButton(); 
        let iconButton = this.getIconButton();  
        let bodyStyle = [styles.body, styles.mediaQueryOnText];
        return (
            <div ref={this.content} style={styles.content}>
                <div style={styles.stretchContainer}>
                    { iconButton }
                    <div style={styles.title}>
                        Biography of a Portrait
                    </div>
                    <div style={bodyStyle}>
                        {'Hello I am the About Content'}
                    </div>
                    { closeButton }
                    { footer }
                </div>
            </div>
        )
    }

    getFooter() {
        const jen = 'https://jennifertrainadorge.com/';
        const amay = 'https://amaykataria.com';
        return (
            <div style={styles.footerContainer}>
              <a 
                style={styles.footer} 
                target='_blank' 
                rel="noopener noreferrer" 
                href={jen}>
                © Jennifer Traina-Dorge 2020
              </a>
              <div style={[styles.footer, styles.footerSecond]}>
                  <span style={styles.developed}>Developed by </span>
                  <a 
                    style={styles.developer} 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    href={amay}>
                    Amay Kataria
                </a>
              </div>
            </div>
        )
    }

    showPopup(popupTypeState) {
        // Adjust the scroll top.
        this.content.current.scrollTop = 0; 

        this.setState({
            isVisible: true,
            popupState: PopupState.Open,
            popupType: popupTypeState
        }); 
    }

    hidePopup(event) {
        event.stopPropagation(); 

        this.setState({
            popupState: PopupState.Close
        });

        // We show main things because everything is hidden. 
        if (this.state.popupType === PopupType.Permissions) {
            this.props.onShowContent(); 
        }
    }

    handleOnTouch(event) {
        // Don't let this propogate to the main screen
        // where touch events mean something. 
        event.stopPropagation();
    }
 }

export default Radium(Popup);

