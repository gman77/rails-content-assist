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
			var whitespace = this._leadingWhitespace(buffer, offset);
			var prefix = context.prefix;
			var keywords = [];
			
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
			
			/* validates */
			if("validates".indexOf(prefix) === 0){
				var proposal = "validates :name, :options = {}";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "validates - rails activeRecord helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length},
								{offset: offset + proposal.indexOf(":options = {}"), length: ":options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* validates_associated */
			if("validates_associated".indexOf(prefix) === 0){
				var proposal = "validates_associated :name";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "validates_associated - rails activeRecord helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* validates_with */
			if("validates_with".indexOf(prefix) === 0){
				var proposal = "validates_with :name, :options = {}";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "validates_with - rails activeRecord helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length},
								{offset: offset + proposal.indexOf(":options = {}"), length: ":options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* after_initialize callback */
			if("after_initialize".indexOf(prefix) === 0){
				var proposal = "after_initialize do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "after_initialize - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* after_find callback */
			if("after_find".indexOf(prefix) === 0){
				var proposal = "after_find do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "after_find - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* before_validation callback */
			if("before_validation".indexOf(prefix) === 0){
				var proposal = "before_validation do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "before_validation - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* after_validation callback */
			if("after_validation".indexOf(prefix) === 0){
				var proposal = "after_validation do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "after_validation - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* before_save callback */
			if("before_save".indexOf(prefix) === 0){
				var proposal = "before_save do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "before_save - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* after_save callback */
			if("after_save".indexOf(prefix) === 0){
				var proposal = "after_save do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "after_save - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* around_save callback */
			if("around_save".indexOf(prefix) === 0){
				var proposal = "around_save do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "around_save - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* before_create callback */
			if("before_create".indexOf(prefix) === 0){
				var proposal = "before_create do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "before_create - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* after_create callback */
			if("after_create".indexOf(prefix) === 0){
				var proposal = "after_create do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "after_create - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* around_create callback */
			if("around_create".indexOf(prefix) === 0){
				var proposal = "around_create do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "around_create - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* before_update callback */
			if("before_update".indexOf(prefix) === 0){
				var proposal = "before_update do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "before_update - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* after_update callback */
			if("after_update".indexOf(prefix) === 0){
				var proposal = "after_update do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "after_update - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* around_update callback */
			if("around_update".indexOf(prefix) === 0){
				var proposal = "around_update do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "around_update - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* before_destroy callback */
			if("before_destroy".indexOf(prefix) === 0){
				var proposal = "before_destroy do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "before_destroy - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* after_destroy callback */
			if("after_destroy".indexOf(prefix) === 0){
				var proposal = "after_destroy do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "after_destroy - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* around_destroy callback */
			if("around_destroy".indexOf(prefix) === 0){
				var proposal = "around_destroy do |name|\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "around_destroy - rails activeRecord callback",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			return keywords;
		},
		
		/**
		 * Returns a string of all the whitespace at the start of the current line.
		 * @param {String} buffer The document
		 * @param {Integer} offset The current selection offset
		 */
		_leadingWhitespace : function(buffer, offset) {
			var whitespace = "";
			offset = offset-1;
			while (offset > 0) {
				var c = buffer.charAt(offset--);
				if (c === '\n' || c === '\r') {
					//we hit the start of the line so we are done
					break;
				}
				if (/\s/.test(c)) {
					//we found whitespace to add it to our result
					whitespace = c.concat(whitespace);
				} else {
					//we found non-whitespace, so reset our result
					whitespace = "";
				}
			}
			return whitespace;
		}
	};

	return ActiveRecordContentProvider;
}());