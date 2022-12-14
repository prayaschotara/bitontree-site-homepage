import React from 'react'

export default function Ellipse36() {
    return (
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3603_5565)">
                <circle cx="32.5164" cy="31.7633" r="26" transform="rotate(-128.274 32.5164 31.7633)" fill="url(#paint0_radial_3603_5565)" fill-opacity="0.6" shape-rendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_3603_5565" x="0.51532" y="0.762207" width="64.0021" height="64.0022" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3603_5565" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.180392 0 0 0 0 0.388235 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3603_5565" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3603_5565" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_3603_5565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.5164 26.7633) rotate(95.5275) scale(31.1448)">
                    <stop stop-color="#FF94AF" />
                    <stop offset="0.505185" stop-color="#FF2E63" />
                </radialGradient>
            </defs>
        </svg>

    )
}
