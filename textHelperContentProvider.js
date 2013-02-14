/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/
 
 /**
 * Content assist for Ruby on Rails.
 * TextHelper content provider.
 */
var TextHelperContentProvider = (function() {
	
	function TextHelperContentProvider() {}
	
	TextHelperContentProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			var keywords = [];
			var prefix = context.prefix;
			
			/* excerpt helper */
			if("excerpt".indexOf(prefix) === 0){
				var proposal = "excerpt(text, phrase, *args)";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "excerpt - rails text helper",
					positions : [{offset: offset + proposal.indexOf("text"), length: "text".length},
								{offset: offset + proposal.indexOf("phrase"), length: "phrase".length},
								{offset: offset + proposal.indexOf("*args"), length: "*args".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* pluralize helper */
			if("pluralize".indexOf(prefix) === 0){
				var proposal = "pluralize(count, singular, plural = nil)";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "pluralize - rails text helper",
					positions : [{offset: offset + proposal.indexOf("count"), length: "count".length},
								{offset: offset + proposal.indexOf("singular"), length: "singular".length},
								{offset: offset + proposal.indexOf("plural = nil"), length: "plural = nil".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* truncate helper */
			if("truncate".indexOf(prefix) === 0){
				var proposal = "truncate(text, options = {})";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "truncate - rails text helper",
					positions : [{offset: offset + proposal.indexOf("text"), length: "text".length},
								{offset: offset + proposal.indexOf("options = {}"), length: "options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* word_wrap helper */
			if("word_wrap".indexOf(prefix) === 0){
				var proposal = "word_wrap(text, *args)";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "word_wrap - rails text helper",
					positions : [{offset: offset + proposal.indexOf("text"), length: "text".length},
								{offset: offset + proposal.indexOf("*args"), length: "*args".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* highlight helper */
			if("highlight".indexOf(prefix) === 0){
				var proposal = "highlight(text, phrases, *args)";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "highlight - rails text helper",
					positions : [{offset: offset + proposal.indexOf("text"), length: "text".length},
								{offset: offset + proposal.indexOf("phrases"), length: "phrases".length},
								{offset: offset + proposal.indexOf("*args"), length: "*args".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			return keywords;
		}
	};

	return TextHelperContentProvider;
}());