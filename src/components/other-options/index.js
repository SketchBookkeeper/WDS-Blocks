import './editor.scss';
/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
	ColorPalette,
	// description,
} = wp.blocks;

const {
	// Button,
	PanelBody,
	PanelColor,
	PanelRow,
	SelectControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class BackgroundOptions extends Component {
	render() {
		return (
			<PanelBody
				title={ __( 'Other Options' ) }
				className="wds-other-options"
			>
				<PanelRow>
					<SelectControl
						key="animation-type"
						label={ __( 'Animation Type' ) }
						value={ this.props.attributes.animationType ? this.props.attributes.animationType : '' }
						options={ [
							{
								label: __( 'None' ),
								value: '',
							},
							{
								label: __( 'Image' ),
								value: 'image',
							},
							{
								label: __( 'Video' ),
								value: 'video',
							},
							{
								label: __( 'Color' ),
								value: 'color',
							},
						] }
						onChange={ this.props.onChangeAnimationType }
					/>
				</PanelRow>

				<PanelRow>
					<PanelColor
						title={ __( 'Text Color' ) }
						colorValue={ this.props.attributes.textColor }
					>
						<ColorPalette
							value={ this.props.attributes.textColor }
							onChange={ this.props.onChangeTextColor }
						/>
					</PanelColor>
				</PanelRow>
			</PanelBody>
		);
	}
}
