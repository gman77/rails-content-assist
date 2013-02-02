/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/

/**
 * Content assist for Ruby on Rails.
 */
var RailsContentAssistProvider = (function() {

	function RailsContentAssistProvider() {}
	
	RailsContentAssistProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			
			/* ruby restricted keywords */
			var rubyKeywords = ["BEGIN","END","__ENCODING__","__END__","__FILE__","__LINE__","alias","and","begin",
				"break","case","class","def","defined?","do","else","elsif","end","ensure","false","for",
				"if","in","module","next","nil","not","or","redo","rescue","retry","return","self","super",
				"then","true","undef","unless","until","when","while","yield"];
			
			var proposals = [];
			var prefix = context.prefix;
			
			/* insert ruby restricted keywords */
			for(var i=0; i<rubyKeywords.length; ++i){
				var keyword = rubyKeywords[i];
				if(keyword.indexOf(prefix) === 0){
					proposals.push({
						proposal : keyword,
						description : keyword + " - ruby restricted keyword"
					});
				}
			}
			
			return proposals;
		}
	};
	return RailsContentAssistProvider;
}());