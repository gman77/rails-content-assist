/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/
 
 /**
 * Content assist for Ruby on Rails.
 * ActiveRecord content provider.
 */
var ActiveRecordContentProvider = (function() {
	
	function ActiveRecordContentProvider() {}
	
	ActiveRecordContentProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			var keywords = [];
			var prefix = context.prefix;
			
			/* belongs_to association */
			if("belongs_to".indexOf(prefix) === 0){
				var proposal = "belongs_to :name, :options = {}";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "belongs_to - rails activeRecord helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length},
								{offset: offset + proposal.indexOf(":options = {}"), length: ":options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* has_one association */
			if("has_one".indexOf(prefix) === 0){
				var proposal = "has_one :name, :options = {}";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "has_one - rails activeRecord helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length},
								{offset: offset + proposal.indexOf(":options = {}"), length: ":options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* has_many association */
			if("has_many".indexOf(prefix) === 0){
				var proposal = "has_many :name, :options = {}";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "has_many - rails activeRecord helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length},
								{offset: offset + proposal.indexOf(":options = {}"), length: ":options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* has_and_belongs_to_many association */
			if("has_and_belongs_to_many".indexOf(prefix) === 0){
				var proposal = "has_and_belongs_to_many :name, :options = {}";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "has_and_belongs_to_many - rails activeRecord helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length},
								{offset: offset + proposal.indexOf(":options = {}"), length: ":options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			return keywords;
		}
	};

	return ActiveRecordContentProvider;
}());