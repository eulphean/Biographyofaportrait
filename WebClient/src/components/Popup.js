import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { ReactComponent as Exit } from '../svg/close_popup.svg'
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
        zIndex: '998',
        opacity: '1'
    },

    hideOverlay: {
        zIndex: '-998',
        opacity: '0'
    },

    showContent: {
        zIndex: '999',
        opacity: '1'
    },

    hideContent: {
        zIndex: '-999',
        opacity: '0'
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
            paddingLeft: padding.extraHuge, 
            paddingRight: padding.extraHuge
        },

        '@media (min-width: 900px)': {  
            paddingLeft: padding.veryMassive, 
            paddingRight: padding.veryMassive
        },

        '@media (min-width: 1200px)' : {
            paddingLeft: padding.extraMassive, 
            paddingRight: padding.extraMassive
        },
        opacity: '0.8'
    },

    title: {
        marginTop: padding.big,
        textAlign: 'center',
        fontFamily: fontFamily.elliott,
        fontSize: fontSize.veryBig,
        letterSpacing: '2.5px',
        lineHeight: '1.8',
       
        '@media (min-width: 750px)': {  
            fontSize: fontSize.extraBig
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.huge
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.veryHuge
        }
    },

    body: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: padding.small,
        justifyContent: 'center',
        fontFamily: fontFamily.grotesk,
        fontSize: fontSize.small,
        color: color.jenGrey
    },

    alignCenter: {
        textAlign: 'center'
    },

    // Applied on stuff
    mediaQueryOnText: {
        '@media (min-width: 750px)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.veryBig
        }
    },

    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        // padding: padding.extraSmall,
        // backgroundColor: color.darkGrey,
        marginRight: '-' + fontSize.verySmall,
        height: fontSize.big,
        width: fontSize.big,
        fill: '#4a494a',
        // fontFamily: fontFamily.helvetica,

        '@media (min-width: 600px)': {  
            marginRight: '-' + fontSize.extraInsane,
            // padding: padding.verySmall,
            height: fontSize.veryBig, 
            width: fontSize.veryBig
            // fontSize: fontSize.small
        },

        '@media (min-width: 900px)': {  
            // padding: padding.verySmall,
            height: fontSize.extraBig, 
            width: fontSize.extraBig,
            marginRight: '-108px'
            // fontSize: fontSize.verySmall
        },

        '@media (min-width: 1200px)': {  
            marginRight: '-124px',
            height: fontSize.massive, 
            width: fontSize.massive,
            // fontSize: fontSize.big,
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
        marginTop: padding.veryBig, 
        marginBottom: padding.veryBig,
        background: color.jenGrey, 
        fontFamily: fontFamily.helvetica,
        fontSize: fontSize.small,
        color: color.lightGrey,
        letterSpacing: '1.5px',
        padding: padding.verySmall,
        borderRadius: fontSize.tiny,
        cursor: 'pointer'
    },

    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: padding.big,
    },

    footer: {
        display: 'flex',
        alignItems: 'center',
        color: color.selected,
        fontFamily: fontFamily.grotesk,
        fontSize: fontSize.verySmall,
        letterSpacing: '2.0px',

        '@media (min-width: 750px)': {  
            fontSize: fontSize.small,
        }
    },
    
    footerFirst: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    footerSecond: {
        marginTop: padding.tiny,
    },

    developed: {
        fontSize: fontSize.verySmall,
        fontFamily: fontFamily.grotesk,
        paddingLeft: padding.tiny, 
        paddingRight: padding.tiny,
        color: color.lightGrey,

        '@media (min-width: 750px)': {  
            fontSize: fontSize.small,
        }
    },

    developer: {
        marginLeft: padding.tiny
    },

    permissions: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        width: '250px'
    },

    poem: {
        marginLeft: padding.small,

        '@media (min-width: 568px) and (orientation: landscape)': {
            marginLeft: '0px',
        },

        '@media (min-width: 667px) and (orientation: landscape)': {
            marginLeft: '-' + padding.verySmall,
        },

        '@media (min-width: 1024px)': {  
            marginLeft: '-' + padding.veryHuge,
        }
    },

    biography: {
        marginLeft: padding.small,
        marginRight: padding.small
    },

    footerSpace: {
        marginBottom: padding.extraBig
    }
}

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isVisible : false,
            isCameraSupported: true,
            popupState: PopupState.None,
            popupType: PopupType.Permissions
        };

        this.content = React.createRef(); 
        this.isCameraSupported = true; 
    }

    componentDidMount() {
        // Right check to see if the camera is actually supported on not. 
        this.isCameraSupported = !('undefined' === typeof (navigator.mediaDevices.enumerateDevices));
        console.log('isCamSupported: ' + this.isCameraSupported);
        // Create the apologetic popup here. 
        if (!this.isCameraSupported) {
            setTimeout(this.showPopup(PopupType.Permissions), 500);
        }
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
            overlayStyle = [styles.overlay, styles.hideOverlay]; 
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
            contentContainerStyle = [styles.contentContainer, styles.hideContent]; 
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
            <div style={buttonContainerStyle} onClick={this.onAuthorize.bind(this)}>
                Authorize
            </div>
        ); 
    }

    getSkipButton() {
        let buttonContainerStyle=[styles.buttonContainer, styles.mediaQueryOnText];
        return (
            <div style={buttonContainerStyle} onClick={this.onSkip.bind(this)}>
                Skip
            </div>
        ); 
    }

    getCloseButton() {
        let buttonContainerStyle=[styles.buttonContainer, styles.mediaQueryOnText];
        return (
            <div style={buttonContainerStyle} onClick={this.hidePopup.bind(this)}>
                TODAY
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
        let authorizeButton = this.getAuthorizeButton();
        let skipButton = this.getSkipButton(); 
        let iconButton = this.getIconButton();  
        let bodyStyle = [styles.body, styles.alignCenter, styles.mediaQueryOnText, styles.footerSpace];
        let content = this.isCameraSupported ? 
        (   
            <div style={bodyStyle}>
                {'Camera permissions - Authorize to grant access. Skip to deny access.'}
                <div style={styles.permissions}>
                    {authorizeButton}
                    {skipButton}
                </div>
            </div>
        ) :
        (
            <div style={bodyStyle}>
                {'The experience of biographyofaportrait.art is limited on Chrome — consider switching to Safari on your mobile device for full website functionality.'}
            </div>
        ); 
        return (
            <div ref={this.content} style={styles.content}>
                <div style={styles.stretchContainer}>
                    { iconButton }
                    { content }
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
                    <div style={bodyStyle}>
                        <div style={styles.poem}>
                            {'Iridescent lake —'}<br />{'birds fly home, I see'}<br />{'blink! a water glass;'}<br/><br/>
                        </div>
                        <div style={[styles.alignCenter, styles.biography]}>
                            {'this is the Biography of a Portrait.'}
                        </div>
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
                <div style={styles.footerFirst}>
                    <span style={styles.developed}>©&nbsp;</span>
                    <a 
                        style={styles.footer} 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        href={jen}>
                        Jennifer Traina-Dorge
                    </a>
                    <span style={styles.developed}>&nbsp;2020</span>
                </div>
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
    }

    onAuthorize(event) {
        event.stopPropagation();

        this.setState({
            popupState: PopupState.Close
        });

        if (this.state.popupType === PopupType.Permissions) {
            this.props.onAuthorize(); 
        }
    }

    onSkip(event) { 
        event.stopPropagation();

        this.setState({
            popupState: PopupState.Close
        });
        
        if (this.state.popupType === PopupType.Permissions) {
            this.props.onSkip(); 
        }
    }

    handleOnTouch(event) {
        // Don't let this propogate to the main screen
        // where touch events mean something. 
        event.stopPropagation();
    }
 }

export default Radium(Popup);

