/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/

/**
 * Content assist for Ruby on Rails.
 */
var RailsContentAssistProvider = (function() {

	function RailsContentAssistProvider(staticContentProvider, controlFlowContentProvider, classFlowContentProvider, textHelperContentProvider){
		this.staticContentProvider = staticContentProvider;
		this.controlFlowContentProvider = controlFlowContentProvider;
		this.classFlowContentProvider = classFlowContentProvider;
		this.textHelperContentProvider = textHelperContentProvider;
	}
	
	RailsContentAssistProvider.prototype = {
		computeProposals: function(buffer, offset, context) {		
			var proposals = [];
			
			/* add object keywords */
			proposals = proposals.concat(this.classFlowContentProvider.computeProposals(buffer, offset, context));
			
			/* add control flow keywords */
			proposals = proposals.concat(this.controlFlowContentProvider.computeProposals(buffer, offset, context));
			
			/* add rails common helpers keywords */
			proposals = proposals.concat(this.textHelperContentProvider.computeProposals(buffer, offset, context));
			
			/* add static keywords */
			proposals = proposals.concat(this.staticContentProvider.computeProposals(buffer, offset, context));
			
			return proposals;
		}
	};
	return RailsContentAssistProvider;
}());