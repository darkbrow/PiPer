export const domain = 'naver';

export const resource = {
  // Assign a CSS class
  buttonClassName: 'control',
  // Scale the button
  buttonScale: 0.7,
  // Apply custom CSS styles
  buttonStyle: /** CSS */ (`
    /* Declaring CSS this way ensures it gets optimized when the extension is built */
    cursor: pointer;
    opacity: 1;
    padding: 0 0 0 12px;
    background-color: transparent;
    border-style: none;
  `),
  // Apply a custom CSS hover style
  buttonHoverStyle: /** CSS */ (`opacity: 1 !important`),
  buttonParent: function() {
    // Returns the element that will contain the button
    var naverVidElements = [
        document.querySelector(".ControlBox_comp_control_box__zduPu .ControlBox_view_control_group__1DCTL"),
        document.querySelector(".VideoControlBox_view_control_group__Gls_j"),
        document.querySelector(".rmc_control_right"),
        document.querySelector(".pzp-pc__bottom-buttons-right"),
    ];
    var naverVidElement = naverVidElements.findIndex(function(el) {
        return (el !== null);
    });
    return naverVidElements[naverVidElement];
  },
  videoElement: function() {
    // Returns the video element
    return document.querySelector('.webplayer-internal-video');
  },
};
